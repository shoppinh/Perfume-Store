package com.tuhungkien.ecommerce.mapper;

import com.tuhungkien.ecommerce.domain.Perfume;
import com.tuhungkien.ecommerce.dto.perfume.PerfumeRequest;
import com.tuhungkien.ecommerce.dto.perfume.PerfumeResponse;
import com.tuhungkien.ecommerce.service.PerfumeService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class PerfumeMapper {

    private final ModelMapper modelMapper;
    private final PerfumeService perfumeService;

    private Perfume convertToEntity(PerfumeRequest perfumeRequest) {
        return modelMapper.map(perfumeRequest, Perfume.class);
    }

    PerfumeResponse convertToResponseDto(Perfume perfume) {
        return modelMapper.map(perfume, PerfumeResponse.class);
    }

    List<PerfumeResponse> convertListToResponseDto(List<Perfume> perfumes) {
        return perfumes.stream()
                .map(this::convertToResponseDto)
                .collect(Collectors.toList());
    }

    public PerfumeResponse findPerfumeById(Long perfumeId) {
        return convertToResponseDto(perfumeService.findPerfumeById(perfumeId));
    }

    public List<PerfumeResponse> findPerfumesByIds(List<Long> perfumesId) {
        return convertListToResponseDto(perfumeService.findPerfumesByIds(perfumesId));
    }

    public List<PerfumeResponse> findAllPerfumes() {
        return convertListToResponseDto(perfumeService.findAllPerfumes());
    }

    public List<PerfumeResponse> filter(List<String> perfumers, List<String> genders, List<Integer> prices, boolean sortByPrice) {
        return convertListToResponseDto(perfumeService.filter(perfumers, genders, prices, sortByPrice));
    }

    public List<PerfumeResponse> findByPerfumerOrderByPriceDesc(String perfumer) {
        return convertListToResponseDto(perfumeService.findByPerfumerOrderByPriceDesc(perfumer));
    }

    public List<PerfumeResponse> findByPerfumeGenderOrderByPriceDesc(String perfumeGender) {
        return convertListToResponseDto(perfumeService.findByPerfumeGenderOrderByPriceDesc(perfumeGender));
    }

    public PerfumeResponse savePerfume(PerfumeRequest perfumeRequest, MultipartFile file) {
        return convertToResponseDto(perfumeService.savePerfume(convertToEntity(perfumeRequest), file));
    }

    public List<PerfumeResponse> deleteOrder(Long perfumeId) {
        return convertListToResponseDto(perfumeService.deletePerfume(perfumeId));
    }

    public List<PerfumeResponse> findPerfumeMostStar(Integer number) {
        return convertListToResponseDto(perfumeService.findPerfumeMostStar(number));
    }

    public List<PerfumeResponse> findPerfumeYear(Integer number) {
        return convertListToResponseDto(perfumeService.findPerfumeYear(number));
    }

    public List<PerfumeResponse> findPerfumePopular(Integer number) {
        return convertListToResponseDto(perfumeService.findPerfumePopular(number));
    }
}
