package com.react.todo.common;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String origin = "http://localhost:3000";
        String[] originPatterns = origin.split(",");

        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedHeaders("*")
                .exposedHeaders("Content-Disposition")
                .allowedOriginPatterns(originPatterns)
                .allowCredentials(true);
    }
}
