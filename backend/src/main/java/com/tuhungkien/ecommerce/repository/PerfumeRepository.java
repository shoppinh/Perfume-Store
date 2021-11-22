package com.tuhungkien.ecommerce.repository;

import com.tuhungkien.ecommerce.domain.Perfume;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PerfumeRepository extends JpaRepository<Perfume, Long> {

    List<Perfume> findAllByOrderByIdAsc();

    List<Perfume> findByPerfumerIn(List<String> perfumers);

    List<Perfume> findByPerfumeGenderIn(List<String> genders);

    List<Perfume> findByPriceBetween(Integer startingPrice, Integer endingPrice);

    List<Perfume> findByPerfumerOrderByPriceDesc(String perfumer);

    List<Perfume> findByPerfumeGenderOrderByPriceDesc(String perfumeGender);

    List<Perfume> findByIdIn(List<Long> perfumesIds);

    @Modifying
    @Query(value = "SELECT * FROM perfume where perfume_rating is not null order by perfume_rating desc limit ?1 offset 0", nativeQuery = true)
    List<Perfume> findPerfumeMostStar(Integer number);

    @Modifying
    @Query(value = "SELECT * FROM perfume where year is not null order by year desc limit ?1 offset 0", nativeQuery = true)
    List<Perfume> findPerfumeYear(Integer number);

    @Modifying
    @Query(value = "SELECT * FROM perfume where year is not null order by random() desc limit ?1 offset 0", nativeQuery = true)
    List<Perfume> findPerfumePopular(Integer number);
}
