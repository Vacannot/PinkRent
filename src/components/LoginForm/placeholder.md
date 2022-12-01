<InputLabel
sx={{
              color: "black",
              letterSpacing: "-3%",
            }}
htmlFor="login-form-username" >
Username
</InputLabel>
<Input
id="login-form-username"
placeholder="Type your username"
sx={{
              paddingBottom: "16px",
            }}
startAdornment={
<InputAdornment position="start">
<AccountCircleOutlinedIcon />
</InputAdornment>
}
/>

<InputLabel
sx={{
              marginBottom: "22px",
              color: "black",
              letterSpacing: "-3%",
            }}
htmlFor="login-form-password" >
Password
</InputLabel>
<Input
id="login-form-password"
placeholder="Type your password"
type={values.showPassword ? "text" : "password"}
sx={{
              paddingBottom: "16px",
            }}
startAdornment={
<InputAdornment position="start">
<LockOutlinedIcon />
<IconButton
sx={{
                    position: "absolute",
                    right: "0",
                  }}
onClick={handleClickShowPassword} >
{values.showPassword ? (
<VisibilityOutlinedIcon />
) : (
<VisibilityOffOutlinedIcon />
)}
</IconButton>
</InputAdornment>
}
/>
