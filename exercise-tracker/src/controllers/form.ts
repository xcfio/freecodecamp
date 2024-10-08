import { Request, Response } from "express"

const html_form = `
<!DOCTYPE html>
<html>
<head>
  <title>Exercise Tracker</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 25px;
      color: #222;
      background-color: #f5f5f5;
    }

    h1 {
      font-weight: bold;
    }

    p {
      max-width: 900px;
    }

    form {
      margin-bottom: 25px;
      padding: 15px;
      background-color: #87D37C;
      display: inline-block;
      width: 100%;
      max-width: 340px;
      border-radius: 5px;
    }

    input {
      display: block;
      margin-bottom: 10px;
      padding: 5px;
      width: 100%;
      border: 1px solid lightgrey;
      border-radius: 3px;
      font-size: 16px;
    }

    input[type=submit] {
      font-size: 16px;
      border-radius: 3px;
      background-color: #E4F1FE;
      border: 1px solid grey;
      box-shadow: 2px 2px #999;
      cursor: pointer;
    }

    input[type=submit]:hover {
      background-color: #FFFEC4;
    }

    code {
      font-family: monospace;
      font-size: 1.2em;
      background-color: #FFFEC4;
      padding: 2px;
    }
  </style>
</head>

<body>
  <div class="container">
    <h1>Exercise tracker</h1>
    <form action="/api/users" method="post">
      <h2>Create a New User</h2>
      <p><code>POST /api/users</code></p>
      <input id="uname" type="text" name="username" placeholder="username" />
      <input type="submit" value="Submit" />
    </form>
    <form action="/api/users/:_id/exercises" id="exercise-form" method="post">
      <h2>Add exercises</h2>
      <p><code>POST /api/users/:_id/exercises</code></p>
      <input id="uid" type="text" name=":_id" placeholder=":_id" />
      <input id="desc" type="text" name="description" placeholder="description*" />
      <input id="dur" type="text" name="duration" placeholder="duration* (mins.)" />
      <input id="date" type="text" name="date" placeholder="date (yyyy-mm-dd)" />
      <input type="submit" value="Submit" />
    </form>
    <p>
      <strong>GET user's exercise log: </strong>
      <code>GET /api/users/:_id/logs?[from][&amp;to][&amp;limit]</code>
    </p>
    <p><strong>[ ]</strong> = optional</p>
    <p><strong>from, to</strong> = dates (yyyy-mm-dd); <strong>limit</strong> = number</p>
  </div>
  <script>
    const exerciseForm = document.getElementById("exercise-form");

    exerciseForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const userId = document.getElementById("uid").value;
      exerciseForm.action = \`/api/users/\${userId}/exercises\`;
      exerciseForm.submit();
    });
  </script>
</body>
</html>
`

export function form(_req: Request, res: Response) {
    res.send(html_form)
}
