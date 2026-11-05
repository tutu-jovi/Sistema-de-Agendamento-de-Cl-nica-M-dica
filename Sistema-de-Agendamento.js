// Sistema de Consultas - Clínica "Vida Saudável"

const prompt = require('prompt-sync')();

let consultas = [];

function cadastrar() {
  let paciente = prompt("Nome do paciente: ");
  let medico = prompt("Nome do médico: ");
  let data = prompt("Data da consulta: ");
  let horario = prompt("Horário da consulta: ");
 
  let consulta = {
    paciente: paciente,
    medico: medico,
    data: data,
    horario: horario
  };
 
  consultas.push(consulta);
  console.log("Consulta cadastrada!");
}
 
function listar() {
  if (consultas.length == 0) {
    console.log("Nenhuma consulta cadastrada.");
    return;
  }
 
  for (let i = 0; i < consultas.length; i++) {
    console.log("Paciente: " + consultas[i].paciente);
    console.log("Médico: " + consultas[i].medico);
    console.log("Data: " + consultas[i].data);
    console.log("Horário: " + consultas[i].horario);
    console.log("-------------------");
  }
}
 
