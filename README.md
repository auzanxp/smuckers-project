<div align="center">
  <a href="#">
    <img src="/logo.png" alt="Logo" width="140">
  </a>

  <h3 align="center">LIBRARIfy</h3>

  <p align="center">
    An repository for Smucker's Project.
    <br />
    <a href="https://librarify-app.netlify.app/">View Demo</a>
    ·
    <a href="https://www.figma.com/file/YMn8ypqccVsQM8L52EVhJ6/KE?node-id=62-2&t=NqyudprrypWCrqbc-0">Lo-Fi Design</a>
  </p>
</div>

## API BACKEND
### ROUTE API
> GET | [`http://18.136.104.200/books`](http://18.136.104.200/books)
- fetch all data
> GET | [`http://18.136.104.200/books/{id}`](http://18.136.104.200/books/{id})
- fetch data detail
> POST | [`http://18.136.104.200/login`](http://18.136.104.200/books/{id})
- login first to get access_token \
Payload : \
`{
  "username": "",
  "password: ""
}`



| username | password |
| xxxxx | xxxxx |

> POST | [`http://18.136.104.200/books/create`](http://18.136.104.200/books/create)
- add a new data, you must send a token (login first)
Payload: \
title: \
author: \
publisher: \
year: (integer) \
isbn: \
language: \
page: \
length: \
weigth: \
width: \
cover: (URL IMAGE) \
description: \
category: \
rating: \
- Contoh penggunaanya:
```
function addBookHandler(data){
  const response = await axios.post("http://18.136.104.200/books/create",{
    title:  "",
    author: "",
    publisher: "",
    year:  "",
    isbn: "",
    language: "",
    page: "",
    length: "",
    weigth: "",
    width: "",
    cover: "(URL IMAGE)",
    description: "",
    category: "",
    rating: ""
  },{
    headers: {
      token: localStorage.getItem('access_token')
    }
  })
  console.log(data);
}
```
> PUT | [`http://18.136.104.200/books/:id/edit`](http://18.136.104.200/books/:id/edit)
- edit data (MANDATORY SEND ID)
Can submit one of payload below: \
title: \
author: \
publisher: \
year: (integer) \
isbn: \
language: \
page: \
length: \
weigth: \
width: \
cover: (URL IMAGE) \
description: \
category: \
rating: \
- example: 
```
function editBookHandler(data){
  const response = await axios.put(`http://18.136.104.200/books/{$data.id}/edit`,{
    title:  "",
    author: "",
    publisher: "",
    year:  "",
    isbn: "",
    language: "",
    page: "",
    length: "",
    weigth: "",
    width: "",
    cover: "(URL IMAGE)",
    description: "",
    category: "",
    rating: ""
  },{
    headers: {
      token: localStorage.getItem('access_token')
    }
  })
  console.log(data);
}
```
> DELETE | [`http://18.136.104.200/books/:id`](http://18.136.104.200/books/:id)
- delete data (MANDATORY SEND ID) \
example:
```
function deleteBookHandler(data){
  const response = await axios.delete(`http://18.136.104.200/books/{$data.id}`,{
    headers: {
      token: localStorage.getItem('access_token')
    }
  })
  console.log(data);
}
```



## Install

```bash
1. clone this repo
2. cd to repo
3. npm install
4. npm run dev to development project
```

## Git usage guidelines
### Git Message

1) start with prefix [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum], in the body put the issue ID, followed by colon
2) describing the key change introduced by commit
3) limit the subject line to 50 characters
4) if necessary, add the body part to describe the details

```
Examples:
feat/yourname: add .gitignore
fix/yourname: fix container page add user.
```

consider adding the corresponding check for commit message integrity as a step for CI pipeline
Reference: https://chris.beams.io/posts/git-commit/

### Branch Naming
- branch should contain the ID of issue answered (for Jira integration)
- branches based on stories/tasks should start with `feature/` prefix (so that only 'build' CI step is passed)
- branches fixing the bugs have specific `bugfix/` prefix (for them only `build` CI step is passed as well)
- branches resolving issues should start with `hotfix/` prefix (so that both 'build' and 'deploy' CI steps are passed)
- team should follow the same naming standard to make the git log readable and predictable

- prefer short branch names, starting with either `feature/`, `bugfix` or `hotfix/` prefixes, followed by issue IDs:
```
Ex:
feature/yourname
bugfix/yourname
hotfix/yourname
```
## Merge Request
Merge request title must follow convention. No. Ticket - Title ticket or Short description.E
Example: T12345 - Add login page

For merge request description please use merge request template and fill the section properly.

## Code Convention

## Styling
For styling please use tailwind and create a file to store css and use BEM http://getbem.com/introduction/ style for name convention.

