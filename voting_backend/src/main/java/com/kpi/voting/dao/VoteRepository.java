package com.kpi.voting.dao;

import com.kpi.voting.dao.entity.Vote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {

    List<Vote> findAll();

    Optional<Vote> findByUserIdAndQuestionId(Long userId, Long questionId);

    @Query("SELECT answerString FROM Vote vote where vote.question.id = ?1")
    Collection<String> getAnswerStrings(Long id);
}
