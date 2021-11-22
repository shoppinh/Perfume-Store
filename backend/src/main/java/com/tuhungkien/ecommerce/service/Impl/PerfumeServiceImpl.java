package com.tuhungkien.ecommerce.service.Impl;

import com.tuhungkien.ecommerce.domain.Perfume;
import com.tuhungkien.ecommerce.repository.PerfumeRepository;
import com.tuhungkien.ecommerce.repository.ReviewRepository;
import com.tuhungkien.ecommerce.service.PerfumeService;
import graphql.schema.DataFetcher;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.net.InetAddress;
import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PerfumeServiceImpl implements PerfumeService {

    private final PerfumeRepository perfumeRepository;
    private final ReviewRepository reviewRepository;

    // Inject which port we were assigned
    @Value("${local.server.port}")
    private int serverPort;
    private String ip = InetAddress.getLoopbackAddress().getHostAddress();

    @Value("${upload.path}")
    String FILE_DIRECTORY;

    @Override
    public DataFetcher<Perfume> getPerfumeByQuery() {
        return dataFetchingEnvironment -> {
            Long perfumeId = Long.parseLong(dataFetchingEnvironment.getArgument("id"));
            return perfumeRepository.findById(perfumeId).get();
        };
    }

    @Override
    public DataFetcher<List<Perfume>> getAllPerfumesByQuery() {
        return dataFetchingEnvironment -> perfumeRepository.findAllByOrderByIdAsc();
    }

    @Override
    public DataFetcher<List<Perfume>> getAllPerfumesByIdsQuery() {
        return dataFetchingEnvironment -> {
            List<String> objects = dataFetchingEnvironment.getArgument("ids");
            List<Long> perfumesId = objects.stream()
                    .map(Long::parseLong)
                    .collect(Collectors.toList());
            return perfumeRepository.findByIdIn(perfumesId);
        };
    }

    @Override
    public Perfume findPerfumeById(Long perfumeId) {
        return perfumeRepository.findById(perfumeId).get();
    }

    @Override
    public List<Perfume> findAllPerfumes() {
        return perfumeRepository.findAllByOrderByIdAsc();
    }

    @Override
    public List<Perfume> findPerfumesByIds(List<Long> perfumesId) {
        return perfumeRepository.findByIdIn(perfumesId);
    }

    @Override
    public List<Perfume> filter(List<String> perfumers, List<String> genders, List<Integer> prices, boolean sortByPrice) {
        List<Perfume> perfumeList = new ArrayList<>();

        if (!perfumers.isEmpty() || !genders.isEmpty() || !prices.isEmpty()) {
            if (!perfumers.isEmpty()) {
                if (!perfumeList.isEmpty()) {
                    List<Perfume> perfumersList = new ArrayList<>();
                    for (String perfumer : perfumers) {
                        perfumersList.addAll(perfumeList.stream()
                                .filter(perfume -> perfume.getPerfumer().equals(perfumer))
                                .collect(Collectors.toList()));
                    }
                    perfumeList = perfumersList;
                } else {
                    perfumeList.addAll(perfumeRepository.findByPerfumerIn(perfumers));
                }
            }
            if (!genders.isEmpty()) {
                if (!perfumeList.isEmpty()) {
                    List<Perfume> gendersList = new ArrayList<>();
                    for (String gender : genders) {
                        gendersList.addAll(perfumeList.stream()
                                .filter(perfume -> perfume.getPerfumeGender().equals(gender))
                                .collect(Collectors.toList()));
                    }
                    perfumeList = gendersList;
                } else {
                    perfumeList.addAll(perfumeRepository.findByPerfumeGenderIn(genders));
                }
            }
            if (!prices.isEmpty()) {
                perfumeList = perfumeRepository.findByPriceBetween(prices.get(0), prices.get(1));
            }
        } else {
            perfumeList = perfumeRepository.findAllByOrderByIdAsc();
        }
        if (sortByPrice) {
            perfumeList.sort(Comparator.comparing(Perfume::getPrice));
        } else {
            perfumeList.sort((perfume1, perfume2) -> perfume2.getPrice().compareTo(perfume1.getPrice()));
        }
        return perfumeList;
    }

    @Override
    public List<Perfume> findByPerfumerOrderByPriceDesc(String perfumer) {
        return perfumeRepository.findByPerfumerOrderByPriceDesc(perfumer);
    }

    @Override
    public List<Perfume> findByPerfumeGenderOrderByPriceDesc(String perfumeGender) {
        return perfumeRepository.findByPerfumeGenderOrderByPriceDesc(perfumeGender);
    }

    @Override
    public Perfume savePerfume(Perfume perfume, MultipartFile multipartFile) {
        if (multipartFile == null) {
            perfume.setFilename("http://" + ip + ":" + serverPort + "/image/" + "empty.jpg");
        } else {
            String fileName = UUID.randomUUID().toString() + "." + multipartFile.getOriginalFilename();

            File file = new File(FILE_DIRECTORY + fileName);
            try (FileOutputStream fos = new FileOutputStream(file)) {
                fos.write(multipartFile.getBytes());
            } catch (IOException e) {
                e.printStackTrace();
            }
            perfume.setFilename("http://" + ip + ":" + serverPort + "/image/" +  fileName);
        }
        return perfumeRepository.save(perfume);
    }

    @Override
    @Transactional
    public List<Perfume> deletePerfume(Long perfumeId) {
        Perfume perfume = perfumeRepository.findById(perfumeId).get();
        perfume.getReviews().forEach(review -> reviewRepository.deleteById(review.getId()));
        perfumeRepository.delete(perfume);
        return perfumeRepository.findAllByOrderByIdAsc();
    }

    @Override
    public List<Perfume> findPerfumeMostStar(Integer number) {
        return perfumeRepository.findPerfumeMostStar(number);
    }

    @Override
    public List<Perfume> findPerfumeYear(Integer number) {
        return perfumeRepository.findPerfumeYear(number);
    }

    @Override
    public List<Perfume> findPerfumePopular(Integer number){
        return perfumeRepository.findPerfumePopular(number);
    }
}
