package com.kpi.voting.dao.entity;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.hibernate.annotations.Formula;
import org.springframework.data.jpa.repository.Query;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "question")
@Cacheable(false)
@TableGenerator(name="tab", initialValue=0, allocationSize=1)
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator="tab")
    private Long id;

    @NotNull
    private String title;

    @NotNull
    private String type;

    @NotNull
    private String options;

    @OneToMany(mappedBy = "question", cascade = CascadeType.REMOVE)
    private Collection<Vote> votes;

/*    @Fetch(FetchMode.SUBSELECT)
    @Formula("(select count(*) from vote where vote.answer = true and vote.question_id = id)")
    private int voteYesCount;

    @Fetch(FetchMode.SUBSELECT)
    @Formula("(select count(*) from vote where vote.answer = false and vote.question_id = id)")
    private int voteNoCount;*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }


/*    public int getVoteYesCount() {
        return voteYesCount;
    }

    public void setVoteYesCount(int voteYesCount) {
        this.voteYesCount = voteYesCount;
    }

    public int getVoteNoCount() {
        return voteNoCount;
    }

    public void setVoteNoCount(int voteNoCount) {
        this.voteNoCount = voteNoCount;
    }*/

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getOptions() {
        return options;
    }

    public void setOptions(String options) {
        this.options = options;
    }
}
