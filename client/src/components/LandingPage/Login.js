import React from 'react';


export default function Login(props) {

  return(
    
    
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card} style={styledImage}>
            <form className={classes.form} onSubmit={data =>console.log(data)}>
              <CardHeader color="primary" className={classes.cardHeader}>
                <h4>Register</h4>
              </CardHeader>

              <p className={classes.divider}></p>

              <CardBody>
                <CustomInput
                  disabled={false}
                  required={true}
                  labelText="First Name..."
                  id="handle"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: function(e) {setUserName(e.target.value)},
                    value: userName,
                    type: "text",
                    endAdornment: (
                      <InputAdornment position="end">
                        <People className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Email..."
                  id="email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    value: credentials.email,
                    type: "email",
                    onChange: function(e){ setCredentials({email: e.target.value, password: credentials.password})},
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputIconsColor} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "password",
                    onChange: function(e) {setCredentials({email: credentials.email, password: e.target.value})},
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputIconsColor}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    autoComplete: "off"
                  }}
                />
              </CardBody>
              <CardFooter className={classes.cardFooter}>
                <Button
                  onClick={()=> props.registrationHandler(userName, credentials.email, credentials.password, props.loginCallback)}
                  simple="true"
                  color="primary"
                  size="large">
                  Start Your Journey
                </Button>
              </CardFooter>
            </form>
            <Button
              simple="true"
              onClick={props.back}
              color="primary"
              size="small"
              fontWeight="bold">
              Already have an account? Login
            </Button>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}