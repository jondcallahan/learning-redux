import expect from 'expect'
import deepFreeze from 'deep-freeze'

const addCounter = (list) => {
  return [...list, 0]
}

const testAddCounter = () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)
}

const removeItem = (list, index) => {
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}

const testRemoveItem = () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeItem(listBefore, 1)
  ).toEqual(listAfter)
}

const incrementItem = (list, index) => {
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}

const testIncrementItem = () => {
  const listBefore = [0, 10, 20]
  const listAfter= [0, 11, 20]

  deepFreeze(listBefore)

  expect(
    incrementItem(listBefore, 1)
  ).toEqual(listAfter)
}

testAddCounter()
testRemoveItem()
testIncrementItem()
console.log('it worked!');
