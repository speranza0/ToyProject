package youngsee.server.module.user.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import youngsee.server.module.user.dto.UserDto;
import youngsee.server.module.user.dto.request.UserRequest;
import youngsee.server.module.user.entity.User;
import youngsee.server.module.user.repository.UserJpaRepository;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserJpaRepository userJpaRepository;

    private final PasswordEncoder passwordEncoder;

    @Transactional
    public UserDto login(UserRequest.Auth param) {
        User user = userJpaRepository.findByUsername(param.getUsername());

        if(user == null) {
            throw new RuntimeException("아이디가 존재하지 않습니다.");
        }

        if(!passwordEncoder.matches(param.getPassword(), user.getPassword())) {
            throw new RuntimeException("비밀번호가 일치하지 않습니다.");
        }

        user.changeLastestLoginAt();
        return UserDto.toDto(user);
    }
}
