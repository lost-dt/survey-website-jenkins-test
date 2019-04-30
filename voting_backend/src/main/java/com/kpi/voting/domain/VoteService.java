package com.kpi.voting.domain;

import com.kpi.voting.dao.VoteRepository;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dto.RequestVoteDto;
import com.kpi.voting.dao.entity.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.naming.OperationNotSupportedException;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class VoteService {

    @Autowired
    private VoteRepository voteRepository;
    @Autowired
    private QuestionService questionService;

    public void vote(RequestVoteDto vote) throws Exception {
        Question question = questionService.getQuestion(vote.getQuestionId());
        if (Objects.isNull(question)) throw new OperationNotSupportedException("Question not found.");

        boolean isVoteCreated = createVote(vote, question);
        if (!isVoteCreated) throw new OperationNotSupportedException("Some troubles occurred.");

        questionService.printQuestionStatistics(question.getId());
    }

    private boolean createVote(RequestVoteDto vote, Question question) {
        Vote newVote = new Vote();

        newVote.setQuestion(question);
        newVote.setAnswer(vote.getAnswer());

        newVote = voteRepository.save(newVote);
        voteRepository.flush();

        return (newVote.getId() != null);
    }


    public Collection<String> getAnswer(Long id){
        return voteRepository.getAnswer(id);
    }

    public List<Vote> getAllVotes() {
        return voteRepository.findAll();
    }
}
