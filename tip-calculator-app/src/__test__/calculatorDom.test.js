/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

import { expect, describe, it, beforeEach } from '@jest/globals';
import calculatorDOM from '../app/calculatorDom';

describe('Calculator DOM Manipulation', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div>
      <input class="bill">
      <input class="percent">
      <input class="people">
      </div>
      
      <div>
      <p class="tip-total"></p>
      <p class="total"></p>
      </div>`;
  });

  const testDOM = calculatorDOM();

  it('Test 1: Invalid Input', () => {
    const billInput = document.querySelector('.bill');
    const percentInput = document.querySelector('.percent');
    const peopleInput = document.querySelector('.people');

    billInput.value = 0;
    percentInput.value = 0.25;
    peopleInput.value = 10;

    testDOM.validateInputs(billInput, percentInput, peopleInput);
    expect(billInput.className).toBe('bill error');
    expect(percentInput.className).toBe('percent');
    expect(peopleInput.className).toBe('people');
  });

  it('Test 2: Valid inputs', () => {
    const billInput = document.querySelector('.bill');
    const percentInput = document.querySelector('.percent');
    const peopleInput = document.querySelector('.people');

    billInput.value = 123.5;
    percentInput.value = 0.25;
    peopleInput.value = 10;

    testDOM.validateInputs(billInput, percentInput, peopleInput);
    expect(billInput.className).toBe('bill');
    expect(percentInput.className).toBe('percent');
    expect(peopleInput.className).toBe('people');
  });

  it('Test 3: Tip Results of bill of 142.55', () => {
    const billInput = document.querySelector('.bill');
    const percentInput = document.querySelector('.percent');
    const peopleInput = document.querySelector('.people');
    const tipTotal = document.querySelector('.tip-total');
    const total = document.querySelector('.total');

    billInput.value = 123.5;
    percentInput.value = 0.25;
    peopleInput.value = 10;

    // Assuming inputs are valid, just pass in the values along with the dom elements.
    testDOM.calculateTip(
      billInput.value,
      percentInput.value,
      peopleInput.value,
      tipTotal,
      total
    );

    expect(tipTotal.textContent).toBe('4.27');
    expect(total.textContent).toBe('32.79');
  });
});
