const fs = require('fs');

const file = 'db.json';
const content = `{
  "lembretes": [
    {
      "id": "hsgdvhkh679863123",
      "title": "Um Titulo Legal",
      "description": "Uma descrição bacana!",
      "calendar": "2019-10-27",
      "time": "01:17"
    },
    {
      "id": "hsgdvhk5555hasdasd2343463123",
      "title": "Outro Titulo Legal",
      "description": "Mais uma descrição bacana!",
      "calendar": "2019-10-30",
      "time": "12:30"
    },
    {
      "id": "hsgdvhk555asfgjnjj346367623",
      "title": "Outro Titulo Legal2",
      "description": "Mais uma descrição bacana!",
      "calendar": "2019-10-30",
      "time": "12:30"
    },
    {
      "id": "hsgdv5456fgfdgdjji86rfvb,123",
      "title": "Outro Titulo Legal3",
      "description": "Mais uma descrição bacana!",
      "calendar": "2019-11-30",
      "time": "12:30"
    },
    {
      "id": "hsgdvhk5555sdtvytry555563123",
      "title": "Outro Titulo Legal4",
      "description": "Mais uma descrição bacana!",
      "calendar": "2019-12-30",
      "time": "12:30"
    },
    {
      "id": "1572224393557255766",
      "title": "Remember",
      "description": "Remember Remember",
      "calendar": "2019-11-06",
      "time": "00:00"
    },
    {
      "id": "1572224555114948037",
      "title": "Novo",
      "description": "Novissímo",
      "calendar": "2019-10-30",
      "time": "01:12"
    },
    {
      "id": "1572231432120547814",
      "title": "Lembrar",
      "description": "Lembrar de alguma coisa",
      "calendar": "2019-11-21",
      "time": "11:16"
    }
  ]
}`

fs.access(`./${file}`, fs.F_OK, (err) => {
  if (err) {
    fs.writeFile(file, content, (err) => {
      if (err) throw err;
      process.stdout.write(`${file} gerado com sucesso!\n`);
    });
    return;
  }

  // Caso o arquivo já exista.
  process.stdout.write(`${file} já existe!\n`)
  return;
})