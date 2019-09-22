import { Injectable } from '@angular/core';
import { Question } from '../model/question-model';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {

  question: Question[] = [
  { kode_gejala: 'G1',
    nama_gejala: 'Nyeri Dada',
    pertanyaan: 'Apakah dada Anda terasa nyeri?'},
  {kode_gejala: 'G2',
   nama_gejala: 'Bahu kiri terasa tidak enak',
   pertanyaan: 'Apakah bahu kiri Anda sakit?'},
  {kode_gejala: 'G3',
   nama_gejala: 'Keringat Dingin',
   pertanyaan: 'Apakah Anda berkeringat dingin?'},
  {kode_gejala: 'G4',
   nama_gejala: 'Sesak Nafas',
   pertanyaan: 'Apakah Anda mengalami sesak nafas?'},
  {kode_gejala: 'G5',
   nama_gejala: 'Gangguan Pencernaan',
   pertanyaan: 'Apakah Anda mengalami gangguan pencernaan? '},
  {kode_gejala: 'G6',
   nama_gejala: 'Mual',
   pertanyaan: 'Apakah Anda mual ?'},
  {kode_gejala: 'G7',
   nama_gejala: 'Detak jantung tidak teratur',
   pertanyaan: 'Apakah detak jantung Anda tidak teratur ?'},
  {kode_gejala: 'G8',
   nama_gejala: 'Pusing',
   pertanyaan: 'Apakah kepala Anda terasa pusing?'},
  {kode_gejala: 'G9',
   nama_gejala: 'kaki bengkak',
   pertanyaan: 'Apakah kaki Anda bengkak?'},
  {kode_gejala: 'G10',
   nama_gejala: 'Jangtung berdebar',
   pertanyaan: 'Apakah jantung Anda berdebar - debar?'},
  {kode_gejala: 'G11',
   nama_gejala: 'Mudah lelah',
   pertanyaan: 'Apakah Anda mudah lelah?'},
  {kode_gejala: 'G12',
   nama_gejala: 'Nyeri di daerah dada tengah',
   pertanyaan: 'Apakah daerah tengah dada Anda nyeri ?'},
  {kode_gejala: 'G13',
   nama_gejala: 'Mudah Berkeringat',
   pertanyaan: 'Apakah Anda mudah berkeringat?'},
  {kode_gejala: 'G14',
   nama_gejala: 'Dada Mengencang',
   pertanyaan: 'Apakah dada Anda mengencang?'},
  {kode_gejala: 'G15',
   nama_gejala: 'Pembengkakan pada jantung',
   pertanyaan: 'Apakah Jantung Anda mengalami pembengkakan?'},
  {kode_gejala: 'G16',
   nama_gejala: 'Kelainan Fungsi Jantung / Hati',
   pertanyaan: 'Apakah Anda mengalami kelainan fungsi jantung/hati ?'},
  {kode_gejala: 'G17',
   nama_gejala: 'Pendarahan pada jantung',
   pertanyaan: 'Apakah Anda mengalami pendarahan pada jantung?'},
  {kode_gejala: 'G18',
   nama_gejala: 'Wajah kemerahan',
   pertanyaan: 'Apakah wajah Anda berubah menjadi kemerahan?'},
  {kode_gejala: 'G19',
   nama_gejala: 'Batuk',
   pertanyaan: 'Apakah Anda sakit batuk ?'},
  {kode_gejala: 'G20',
   nama_gejala: 'Sakit perut',
   pertanyaan: 'Apakah perut Anda sakit ?'},
  {kode_gejala: 'G21',
   nama_gejala: 'Detak jantung cepat',
   pertanyaan: 'Apakah detak jantung Anda cepat?'},
  {kode_gejala: 'G22',
   nama_gejala: 'Nyeri di daerah lengan kiri',
   pertanyaan: 'Apakah lengan kiri Anda nyeri?'},
  {kode_gejala: 'G23',
   nama_gejala: 'Punggung terasa tidak enak',
   pertanyaan: 'Apakah punggung Anda terasa tidak enak? '},
  {kode_gejala: 'G24',
   nama_gejala: 'Sakit kepala',
   pertanyaan: 'Apakah kepala Anda terasa pusing?'}]
  constructor() { }


  getAllQuestion(){
    return this.question;
  }

  getQuestion(id: string){
    return {
      ...this.question.find(question => {
        return question.kode_gejala === id;
      })
    }
  }
}
