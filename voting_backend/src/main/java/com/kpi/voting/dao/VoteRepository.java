package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;

public interface VoteRepository extends JpaRepository<Vote, Long> {

    List<Vote> findAll();

    @Query("SELECT answerString FROM Vote vote where vote.question.id = ?1")
    Collection<String> getAnswer(Long id);
}
