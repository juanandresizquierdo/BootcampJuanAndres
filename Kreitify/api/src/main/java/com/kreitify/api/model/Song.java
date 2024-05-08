package com.kreitify.api.model;

import lombok.Data;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.persistence.*;

@Entity
@Table(name = "api/songs")
@Data
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String title;

    @NotBlank
    private String artist;

    @NotBlank
    private String genre;

    @NotNull
    private Integer duration; // Duración en segundos

    @NotNull
    private Integer playCount; // Número de reproducciones

    @ManyToOne
    @JoinColumn(name = "album_id")
    private Album album;

}

