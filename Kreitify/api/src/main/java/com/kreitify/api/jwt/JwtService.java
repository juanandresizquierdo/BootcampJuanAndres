package com.kreitify.api.auth;

import com.kreitify.api.model.AppUser;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class JwtService {
    public String getToken(UserDetails user) {
        return null;
    }
}
