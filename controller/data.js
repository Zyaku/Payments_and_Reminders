import {readFileSync,writeFileSync} from 'fs';

export function readData(file){
    let data;
    try{
        const txt = readFileSync(file,'utf-8');
        data = JSON.parse(txt);
        
    } catch(error){
        console.log(error);
    }
    return data;
}

export function overWriteData(file, data){
    try {
        writeFileSync(file, data);
    } catch (error) {
        console.error(error);
    }
}