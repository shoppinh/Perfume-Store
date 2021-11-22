package com.tuhungkien.ecommerce.service;

import com.tuhungkien.ecommerce.domain.Perfume;
import graphql.schema.DataFetcher;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PerfumeService {

    DataFetcher<Perfume> getPerfumeByQuery();

    DataFetcher<List<Perfume>> getAllPerfumesByQuery();

    DataFetcher<List<Perfume>> getAllPerfumesByIdsQuery();

    Perfume findPerfumeById(Long perfumeId);

    List<Perfume> findAllPerfumes();

    List<Perfume> findPerfumesByIds(List<Long> perfumesId);

    List<Perfume> filter(List<String> perfumers, List<String> genders, List<Integer> prices, boolean sortByPrice);

    List<Perfume> findByPerfumerOrderByPriceDesc(String perfumer);

    List<Perfume> findByPerfumeGenderOrderByPriceDesc(String perfumeGender);

    Perfume savePerfume(Perfume perfume, MultipartFile file);

    List<Perfume> deletePerfume(Long perfumeId);

    List<Perfume> findPerfumeMostStar(Integer number);

    List<Perfume> findPerfumeYear(Integer number);

    List<Perfume> findPerfumePopular(Integer number);
}
