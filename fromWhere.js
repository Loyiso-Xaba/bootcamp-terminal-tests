export function fromWhere(regist) {
    if (regist.startsWith('CY')) {
        return 'Bellville';
      } else if (regist.startsWith('CJ')) {
        return 'Paarl';
      } else if (regist.startsWith('CA')) {
        return 'Cape Town';
      } else {
        return 'Some other place!';
      }
    }