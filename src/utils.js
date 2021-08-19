export function row(content, styles = "") {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function col(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function css(styles = {}) {
  if (typeof styles === "string") return styles;
  //   const keys = Object.keys(styles);
  //   keys.map((key) => {
  //     return `${key}: ${styles[key]}`;
  //   });
  const toString = (key) => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toString).join(";");
}

export function block(type) {
  return `
    <form name="${type}">
        <h5 name="${type}"></h5>
        <div class="form-group">
            <label>Наименование</label>
            <input type="text" name="value" class="form-control" placeholder="Example input">
        </div>
        <div class="form-group">
            <label>Код стиля CSS</label>
            <input type="text" name="styles" class="form-control" placeholder="Another input">
        </div>
        <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
    </form>
    `;
}
