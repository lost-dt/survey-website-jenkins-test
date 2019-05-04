package com.kpi.voting.domain;

import com.kpi.voting.dao.VoteRepository;
import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.dto.RequestVoteDto;
import com.kpi.voting.dao.entity.Vote;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.lang.model.element.Element;
import javax.naming.OperationNotSupportedException;
import java.util.*;

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

    public String getOptions(Long id){
        Question question = questionService.getQuestion(id);
        return question.getOptions();
    }

    public Map<String, Integer> getStats(Long id){
        HashMap<String, Integer> stats = new HashMap<String, Integer>();
        Collection<String> answers = getAnswer(id);
        String options = getOptions(id);
        String[] optionsList = options.split(", ");
        for (int i = 0; i < optionsList.length; i++) {
            int counter = 0;
            for (String answer: answers){
                if(Arrays.asList(answer.split(", ")).contains(optionsList[i])){
                    counter++;
                }
            }
            stats.put(optionsList[i], counter);
        }
        return stats;
    }
}
