let lang = 'en';
let mas = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let mas2 = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];

if (lang == 'ru'){
        console.log(mas);
} else if(lang == 'en'){
        console.log(mas2);
}

switch (lang) {
	case 'ru':
        console.log(mas); 
	break;
	case 'en':
        console.log(mas2); 
	break;
}

mas = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(mas[lang]);

let namePerson;

namePerson === 'Артем' ? 'Директор': 
        'Максим' ? 'Преподаватель':
        'Студент';
console.log (namePerson);             