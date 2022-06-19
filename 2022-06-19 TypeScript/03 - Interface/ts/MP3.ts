class MP3 extends ElectronicDevice implements Player, Tester {
  volume: number;
  memory: number;

  play(): void {
    alert('Now Playing...');
  }

  pause(): void {
    alert('Paused.');
  }

  stop(): void {
    alert('Stopped!');
  }

  test(): void {
    alert('1 2 testing...');
  }
}
