package com.tuhungkien.ecommerce.controller;

import com.tuhungkien.ecommerce.dto.GraphQLRequest;
import com.tuhungkien.ecommerce.dto.perfume.PerfumeResponse;
import com.tuhungkien.ecommerce.dto.perfume.PerfumeSearchRequest;
import com.tuhungkien.ecommerce.mapper.PerfumeMapper;
import com.tuhungkien.ecommerce.service.graphql.GraphQLProvider;
import graphql.ExecutionResult;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/perfumes")
public class PerfumeController {

    private final PerfumeMapper perfumeMapper;
    private final GraphQLProvider graphQLProvider;

    @GetMapping
    public ResponseEntity<List<PerfumeResponse>> getAllPerfumes() {
        return ResponseEntity.ok(perfumeMapper.findAllPerfumes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PerfumeResponse> getPerfume(@PathVariable("id") Long perfumeId) {
        return ResponseEntity.ok(perfumeMapper.findPerfumeById(perfumeId));
    }

    @PostMapping("/ids")
    public ResponseEntity<List<PerfumeResponse>> getPerfumesByIds(@RequestBody List<Long> perfumesIds) {
        return ResponseEntity.ok(perfumeMapper.findPerfumesByIds(perfumesIds));
    }

    @PostMapping("/search")
    public ResponseEntity<List<PerfumeResponse>> findPerfumesByFilterParams(@RequestBody PerfumeSearchRequest filter) {
        return ResponseEntity.ok(perfumeMapper.filter(filter.getPerfumers(), filter.getGenders(), filter.getPrices(), filter.isSortByPrice()));
    }

    @PostMapping("/search/gender")
    public ResponseEntity<List<PerfumeResponse>> findByPerfumeGender(@RequestBody PerfumeSearchRequest filter) {
        return ResponseEntity.ok(perfumeMapper.findByPerfumeGenderOrderByPriceDesc(filter.getPerfumeGender()));
    }

    @PostMapping("/search/perfumer")
    public ResponseEntity<List<PerfumeResponse>> findByPerfumer(@RequestBody PerfumeSearchRequest filter) {
        return ResponseEntity.ok(perfumeMapper.findByPerfumerOrderByPriceDesc(filter.getPerfumer()));
    }

    @PostMapping("/graphql/ids")
    public ResponseEntity<ExecutionResult> getPerfumesByIdsQuery(@RequestBody GraphQLRequest request) {
        return ResponseEntity.ok(graphQLProvider.getGraphQL().execute(request.getQuery()));
    }

    @PostMapping("/graphql/perfumes")
    public ResponseEntity<ExecutionResult> getAllPerfumesByQuery(@RequestBody GraphQLRequest request) {
        return ResponseEntity.ok(graphQLProvider.getGraphQL().execute(request.getQuery()));
    }

    @PostMapping("/graphql/perfume")
    public ResponseEntity<ExecutionResult> getPerfumeByQuery(@RequestBody GraphQLRequest request) {
        return ResponseEntity.ok(graphQLProvider.getGraphQL().execute(request.getQuery()));
    }

    @GetMapping("/most-star/{num}")
    public ResponseEntity<List<PerfumeResponse>> getPerfumeMostStar(@PathVariable("num") Integer number) {
        return ResponseEntity.ok(perfumeMapper.findPerfumeMostStar(number));
    }

    @GetMapping("/most-popular/{num}")
    public ResponseEntity<List<PerfumeResponse>> getPerfumePopular(@PathVariable("num") Integer number) {
        return ResponseEntity.ok(perfumeMapper.findPerfumePopular(number));
    }


    @GetMapping("/get-newest-perfumes/{num}")
    public ResponseEntity<List<PerfumeResponse>> findPerfumeYear(@PathVariable("num") Integer number) {
        return ResponseEntity.ok(perfumeMapper.findPerfumeYear(number));
    }
}
