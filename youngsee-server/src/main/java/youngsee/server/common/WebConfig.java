package youngsee.server.common;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;

@RequiredArgsConstructor
@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final AuthUserResolver authUserResolver;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String origin = "http://localhost:3002";
        String[] originPatterns = origin.split(",");

        registry.addMapping("/**")
                .allowedMethods("*")
                .allowedHeaders("*")
                .exposedHeaders("Content-Disposition")
                .allowedOriginPatterns(originPatterns)
                .allowCredentials(true);
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(authUserResolver);
    }
}
