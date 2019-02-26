export default (caption, count, checked = false) => `<input
          type="radio"
          id="filter__${caption.toLowerCase()}"
          class="filter__input visually-hidden"
          name="filter"
          ${checked ? `checked`:``}
        />
        <label for="filter__${caption.toLowerCase()}" class="filter__label">${caption} <span class="filter__all-count">${count}</span></label
        >`;