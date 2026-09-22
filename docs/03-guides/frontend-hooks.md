# Frontend data hooks

Apollo Client is the source of server data and Redux persistence stores only the current EdCenta user and JWT. NextAuth is used only to obtain a verified Google ID token; the frontend immediately exchanges it through `googleLogin` and thereafter uses the EdCenta JWT.

Student hooks resolve the active student from the authenticated student or the authorized `viewAs` query parameter. Tests must provide both an Apollo mock and Redux/router context, and mock variables must match the hook's generated variables exactly.
