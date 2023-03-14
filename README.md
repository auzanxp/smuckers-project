<div align="center">
  <a href="#">
    <img src="./src/assets/images/logo-lg.png" alt="Logo" width="140" height="80">
  </a>

  <h3 align="center">Smucker's Project</h3>

  <p align="center">
    An repository for smucker's project.
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="">Lo-Fi Design</a>
  </p>
</div>

# API BACKEND
## ROUTE BOOKS
> GET | [`http://18.136.104.200/books`](http://18.136.104.200/books)
- untuk mengambil data semua buku
> GET | [`http://18.136.104.200/books/{id}`](http://18.136.104.200/books/{id})
- untuk mengambil detail buku
> POST | [`http://18.136.104.200/login`](http://18.136.104.200/books/{id})
- login dulu buat dapetin access_token \
Payload yang harus dikirimkan: \
`{
  "username": "",
  "password: ""
}`



| username | password |
| --- | --- |
| angga | angga |
| auzan | auzan |
| maman | maman |
| baharudin | baharudin |
| irfan | irfan |
| rafi | rafi |
> POST | [`http://18.136.104.200/books/create`](http://18.136.104.200/books/create)
- untuk menambah buku baru harus mengirmkan token (login dulu)
Harus mengirimkan properti berikut: \
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
rating:
Contoh penggunaanya:
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
- untuk mengedit buku (WAJIB MENGIRIMKAN ID)
Bisa mengirimkan salah satu properti dibawah ini: \
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
rating:
Contoh Penggunaanya:
\
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
- untuk menghapus buku (WAJIB MENGIRIMKAN ID) \
Contoh penggunaanya:
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

