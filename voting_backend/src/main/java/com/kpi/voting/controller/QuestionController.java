package com.kpi.voting.controller;

import com.kpi.voting.dao.entity.Question;
import com.kpi.voting.domain.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping(value = "last")
    public @ResponseBody
    Question getLastQuestion() {
        return questionService.getLastQuestion();
    }

    @GetMapping(value = "all")
    public @ResponseBody
    List<Question> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    @GetMapping(value = "/{id}")
    public @ResponseBody
    Question getOneQuestion(@PathVariable("id") Long id) {
        return questionService.getQuestion(id);
    }


    @DeleteMapping(value = "all")
    public @ResponseBody
    Boolean deleteAllQuestions(){
        return questionService.deleteAll();
    }

    @DeleteMapping(value = "/{id}")
    public @ResponseBody
    Boolean deleteOneQuestion(@PathVariable("id") Long id){
        return questionService.deleteById(id);
    }


    @PostMapping()
    public @ResponseBody
    String createQuestion(@RequestBody String question) {
        final Long id = questionService.createQuestion(question);
        if (Objects.isNull(id)) {
            return "Something went wrong. Can't create question " + question;
        } else {
            return "Created question [" + question + "] with id = " + id;
        }
    }

}
