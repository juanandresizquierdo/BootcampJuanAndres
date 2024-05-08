package com.kreitify.api.repositories;

import com.kreitify.api.model.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {

}
