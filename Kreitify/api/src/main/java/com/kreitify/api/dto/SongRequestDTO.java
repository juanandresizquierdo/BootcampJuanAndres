package com.kreitify.api.dto;

import lombok.Data;

@Data
public class SongRequestDTO {
    private String title;
    private String artist;
    private String genre;
    private Integer duration;
    private Integer playCount;
    private Long albumId;
}

