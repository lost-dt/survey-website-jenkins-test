package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Vote;
import com.kpi.voting.domain.VoteService;
import com.kpi.voting.dto.RequestVoteDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

/**
 * @author Roman.Harmash
 * @version 1.0
 * Created on 01.04.2019.
 */
@RestController
@RequestMapping("vote")
public class VoteController {

    @Autowired
    private VoteService voteService;

    @GetMapping(value = "string/{id}")
    public @ResponseBody
    Collection<String> getAnswerStrings(@PathVariable("id") Long id){
        return voteService.getAnswerStrings(id);
    }

    @GetMapping(value = "all")
    public @ResponseBody
    List<Vote> getAllVotes(){
        return voteService.getAllVotes();
    }


    @PostMapping(produces = "application/json")
    public ResponseEntity<?> answer(@Valid @RequestBody RequestVoteDto vote) {
        try {
            voteService.vote(vote);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

}
