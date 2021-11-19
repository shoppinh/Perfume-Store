package com.tuhungkien.ecommerce.dto.user;

import com.tuhungkien.ecommerce.domain.Role;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Set;

@Data
public class UserRequest {

    @NotBlank(message = "First name cannot be empty")
    private String firstName;

    @NotBlank(message = "Last name cannot be empty")
    private String lastName;

    private String email;
    private String city;
    private String address;
    private String phoneNumber;
    private String postIndex;
    private String provider;
    private boolean active;
    private String activationCode;
    private String passwordResetCode;
    private Set<Role> roles;
}
