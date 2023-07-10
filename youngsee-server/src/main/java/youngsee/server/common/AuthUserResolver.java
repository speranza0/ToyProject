package youngsee.server.common;

import lombok.RequiredArgsConstructor;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import youngsee.server.module.user.dto.UserDto;

import javax.servlet.http.HttpSession;

@RequiredArgsConstructor
@Component
public class AuthUserResolver implements HandlerMethodArgumentResolver {

    private final HttpSession httpSession;

    @Override
    public boolean supportsParameter(MethodParameter parameter) {

        boolean hasAnnotation = parameter.getParameterAnnotation(AuthUser.class) != null;
        boolean isUserDtoClass = UserDto.class.equals(parameter.getParameterType());

        return hasAnnotation && isUserDtoClass;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
        return httpSession.getAttribute("loginUser");
    }
}
