const fs = require('fs');
const path = require('path');

const notesFile = 'myNotes.json'
const command = process.argv[2];
const title = process.argv[3];
const content = process.argv[4];

const create = (title, content, done) => {
  fs.readFile(notesFile, (error, data) => {
    if (error) return done(error);

    const notes = JSON.parse(data);
    notes.push({ title, content });
    json = JSON.stringify(notes);

    fs.writeFile(notesFile, json, (err) => {
      if (err) return done(err);

      done();
    });
  });
};

const list = (done) => {
  fs.readFile(notesFile, (error, content) => {
    if(error) return done(error);

    const notes = JSON.parse(content);
    done(null, notes);
  });
};

const remove = (title, done) => {
  fs.readFile(notesFile, (err, content) => {
    if (err) return done(err);

    const notes = JSON.parse(content);
    const deleteNote = notes.filter(item => item.title !== title);
    const json = JSON.stringify(deleteNote);

    fs.writeFile(notesFile, json, (err) => {
      if (err) return done(err);

      return done();
    });
  });
};

const view = (title, done) => {
  fs.readFile(notesFile, (err, content) => {
    if (err) return done(err);
  
    const notes = JSON.parse(content);
    const note = notes.filter(item => item.title === title);

    if(!note[0]) return done(new Error('Заметка не найдена!'));
    done(null, note[0]);
  });
};

switch (command) {
  case 'create':
    create(title, content, (err) => {
      if (err) return console.error(err.message);

      console.log('Новая заметка успешно добавлена!');
    });
    break;
  case 'list':
    list((err, notes) => {
      if (err) return console.error(err.message);
      
      notes.forEach((element, index) => {
        console.log(`${index + 1}. ${element.title}`)
      });
    });
    break;
  case 'remove':
    remove(title, (err) => {
      if (err) return console.error(err.message);
      
      console.log('Заметка успешно удалена!');
    })
    break;
  case 'view':
    view(title, (err, note) => {
      if (err) return console.error(err.message);

      console.log(`# ${note.title}\r\n\r\n\r\n---\r\n\r\n\r\n${note.content}`);
    });
    break;
  default:
    console.log('Команда не найдена.');
}