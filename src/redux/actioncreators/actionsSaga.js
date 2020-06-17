import actionType from "../actions";

// Это тригерит саму сагу.

export function loadSaga() {
  return { type: actionType.saga };
}

// Эти сага вызывает с помощью put() в тех или иных случаях.
export function loadingStart() {
  return { type: actionType.start };
}

export function loadingTodo(arr) {
  return { type: actionType.todo, todo: arr };
}

export function dressForNewLook(property, value) {
  return { type: actionType.dressForNewLook, property, value };
}

export function addTag(tag) {
  return { type: actionType.addTag, tag };
}

export function deleteTag(tags) {
  return { type: actionType.deleteTag, tags };
}

export function watcherDeleteLook(id) {
  return { type: actionType.watcherDeleteLook, id };
}

export function onChangeName(value) {
  return { type: actionType.onChangeName, value };
}

export function deleteLook(id) {
  return { type: actionType.deleteLook, id };
}

export function watcherTest(id) {
  return { type: actionType.watcherTest, id };
}

export function deleteDress(property, id) {
  return { type: actionType.deleteDress, property, id };
}

export function deleteDresssSaga(property, id) {
  return { type: actionType.deleteDressSaga, property, id };
}

export function clearDressForNewLook() {
  return { type: actionType.clearDressForNewLook };
}

export function setDressFilterProperty(property, value) {
  return { type: actionType.setDressFilterProperty, property, value };
}
