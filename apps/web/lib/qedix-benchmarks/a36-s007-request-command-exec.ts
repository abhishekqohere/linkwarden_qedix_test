import { exec } from 'node:child_process';

type QedixRequestInputValue = string & {
  readonly __brand: 'request-input-value';
};

export function qedixExecuteRequestInput(
  command: QedixRequestInputValue,
) {
  return exec(`echo ${command}`);
}