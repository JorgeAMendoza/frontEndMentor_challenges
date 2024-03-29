/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import { expect, describe, it, beforeEach } from '@jest/globals';
import calculatorDOM from '../app/calculatorDom';

describe('Calculator DOM Manipulation', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="billContainer">
      <input class="">
      </div>

      <div class="percentContainer">
      <button class="active" "data-tip-percent=".10">
      <button class="" "data-tip-percent=".25">
      <input class="">
      </div>

      <div class="peopleContainer">
      <input class="">
      </div>
      
      <div>
      <p class="tip-total"></p>
      <p class="total"></p>
      <button id="reset">Reset</button>
      </div>`;
  });

  const testDOM = calculatorDOM();

  it('Test 1: Invalid Input with custom percent', () => {
    const billContainer = document.querySelector('.billContainer');
    const percentContainer = document.querySelector('.percentContainer');
    const peopleContainer = document.querySelector('.peopleContainer');

    billContainer.querySelector('input').value = 45.67;
    percentContainer.querySelector('input').value = 0;
    peopleContainer.querySelector('input').value = 10;

    testDOM.validateInputs(billContainer, percentContainer, peopleContainer);
    expect(billContainer.className).toBe('billContainer');
    expect(percentContainer.querySelector('input').className).toBe('error');
    expect(peopleContainer.className).toBe('peopleContainer');
  });

  it('Test 2: Valid inputs with custom percent', () => {
    const billContainer = document.querySelector('.billContainer');
    const percentContainer = document.querySelector('.percentContainer');
    const peopleContainer = document.querySelector('.peopleContainer');

    billContainer.querySelector('input').value = 5;
    percentContainer.querySelector('input').value = 0.24;
    peopleContainer.querySelector('input').value = 10;

    testDOM.validateInputs(billContainer, percentContainer, peopleContainer);
    expect(billContainer.className).toBe('billContainer');
    expect(percentContainer.querySelector('input').className).toBe('');
    expect(peopleContainer.className).toBe('peopleContainer');
  });

  it('Test 3: Valid input with percent button', () => {
    const billContainer = document.querySelector('.billContainer');
    const percentContainer = document.querySelector('.percentContainer');
    const peopleContainer = document.querySelector('.peopleContainer');

    billContainer.querySelector('input').value = 5;
    peopleContainer.querySelector('input').value = 10;

    testDOM.validateInputs(billContainer, percentContainer, peopleContainer);
    expect(billContainer.className).toBe('billContainer');
    expect(peopleContainer.className).toBe('peopleContainer');
  });

  it('Test 4: Tip Results of bill of 142.55', () => {
    const billContainer = document.querySelector('.billContainer');
    const percentContainer = document.querySelector('.percentContainer');
    const peopleContainer = document.querySelector('.peopleContainer');
    const tipTotal = document.querySelector('.tip-total');
    const total = document.querySelector('.total');

    billContainer.querySelector('input').value = 142.55;
    percentContainer.querySelector('input').value = 0.15;
    peopleContainer.querySelector('input').value = 5;

    // Assuming inputs are valid, just pass in the values along with the dom elements.
    testDOM.calculateTip(
      billContainer,
      percentContainer,
      peopleContainer,
      tipTotal,
      total
    );

    expect(tipTotal.textContent).toBe('4.27');
    expect(total.textContent).toBe('32.79');
  });

  it('Test 5: Reset values', () => {
    const billContainer = document.querySelector('.billContainer');
    const percentContainer = document.querySelector('.percentContainer');
    const peopleContainer = document.querySelector('.peopleContainer');
    const tipTotal = document.querySelector('.tip-total');
    const total = document.querySelector('.total');

    testDOM.resetCalculator(
      billContainer,
      percentContainer,
      peopleContainer,
      tipTotal,
      total
    );

    expect(billContainer.querySelector('input').value).toBe('');
    expect(percentContainer.querySelector('input').value).toBe('');
    expect(percentContainer.querySelector('button.active')).toBe(null);
    expect(peopleContainer.querySelector('input').value).toBe('');
    expect(tipTotal.textContent).toBe('0.00');
    expect(total.textContent).toBe('0.00');
  });
});
