# Working agreements for Claude in this repository

## When writing or changing code
- Before writing anything, read the surrounding code and match its naming, structure, formatting,
  patterns and error handling. If the request is unclear about style, follow what is already here.
- After each code change, list in the reply:
  1. **Security concerns:** input validation, injection, secrets or credentials, unsafe file or network
     access, dependency risk, and anything else that could be exploited.
  2. **Assumptions:** what you assumed about the environment, inputs, versions or intended behaviour.
- Point out the risky parts explicitly so the owner can check them, rather than leaving them to find them.
- The owner checks every change for syntax consistency with the codebase and for security
  vulnerabilities, so make that review easy: keep changes small and focused.

## Publishing and posting
- Show the owner every claim, post or review before it goes out. Post only after explicit approval
  in chat.
- Use the owner's chosen pseudonym. Never use their real name or email.
