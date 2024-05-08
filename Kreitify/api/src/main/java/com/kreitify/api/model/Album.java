package com.kreitify.api.model;



import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "albums")
@Data
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String artist;

    @NotNull
    private Integer release_year;

    @NotBlank
    private String image;

    @OneToMany(mappedBy = "album")
    private List<Song> songs;
}

