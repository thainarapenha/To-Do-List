import { createSlice } from "@reduxjs/toolkit";
import { NoteData } from "../config/type";
import { gerarID } from "../utils/gerarID";

const initialState = {
  nextId: 3,
  activeProject: 0,
  projetos: [
    { id: 0, title: 'Caixa de entrada', notas: [] as NoteData[], deletar: false },
    { id: 1, title: 'Hoje', notas: [] as NoteData[], deletar: false },
    { id: 2, title: 'Essa semana', notas: [] as NoteData[], deletar: false },
  ],
}

const projectSlicer = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProjeto: (state, {payload}) => {
      const novoProjeto = {
        id: state.nextId,
        title: payload,
        notas: [],
        deletar: true,
      };
      state.nextId += 1;

      state.projetos.push(novoProjeto);
    },

    changeProject: (state, { payload }) => {
      state.activeProject = payload;
    },

    updateProjetos: (state, {payload}) => {
      state.projetos = state.projetos.map(projeto => {
        if(projeto.id === payload.id) {
          projeto.title = payload.title;
        }
        return projeto;
      })
    },

    removerProjeto: (state, {payload}) => {
      state.projetos = state.projetos.filter(projeto => projeto.id !== payload);
    },

    addNotas: (state, {payload}) => {
      state.projetos = state.projetos.map(projeto => {
        if(projeto.id === payload.idProject){
          const novaNota: NoteData = {
            id: gerarID(),
            ...payload.notas,
            state: "novo",
            priority: "Normal",
          }

          projeto.notas.push(novaNota)
        }
        return projeto;
      })
    },

    updateNota: (state, {payload}) => {
      state.projetos = state.projetos.map(projeto => {
        if(projeto.id === payload.projetoID){

          projeto.notas = projeto.notas.map(nota => {
            if(nota.id === payload.notaID){
              const novaNota = {
                ...nota,
                ...payload.nota,
              }

              nota = novaNota;
            }
            return nota;
          })
        }
        return projeto;
      });
    },

    removerNota: (state, {payload}) => {
      state.projetos = state.projetos.map(projeto => {
        if(projeto.id === payload.idProject){
          projeto.notas = projeto.notas.filter(nota => nota.id !== payload.idTask);
        }
        return projeto;
      });
    },
  },
});

export const {
  addProjeto,
  changeProject,
  updateProjetos,
  removerProjeto,
  addNotas,
  updateNota,
  removerNota,
} = projectSlicer.actions;

export default projectSlicer.reducer;