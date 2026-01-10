package org.stormsofts.matrimony.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {

        http
                // enable CORS using your CorsConfig (WebMvcConfigurer)
                .cors(Customizer.withDefaults())
                // disable CSRF for APIs
                .csrf(csrf -> csrf.disable())
                // allow all requests (for now)
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                );

        return http.build();
    }
}
