let lang = 'ru' && 'en';
let mas;

if (lang == 'ru'){
    mas = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    console.log(mas);
} else if(lang == 'en'){
    mas = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
    console.log(mas);
}

switch (lang) {
	case 'ru':
        mas = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
        console.log(mas); 
	break;
	case 'en':
        mas = ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'];
        console.log(mas); 
	break;
}

mas = {
	'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
	'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(mas[lang]);


let namePerson;

namePerson = 'Артем' ? 'Директор': 'Студент';
console.log (namePerson);
namePerson = 'Максим' ? 'Преподаватель':'Студент';
console.log (namePerson);           