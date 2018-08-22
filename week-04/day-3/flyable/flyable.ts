'use strict';

export interface Flyable {
  land(): void;
  fly(): void;
  takeOf(): void;
}