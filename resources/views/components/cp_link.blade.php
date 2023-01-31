@if ($edit_url)
    <a href="{{ $edit_url }}" target="_blank" title="Edit this page" class="toolbar_cell">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="toolbar_cell_icon">
            <path d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6a2 2 0 0 0-2.8 0l-15 15V24h6.4l15-15zm-5-5L24 7.6l-3 3L17.4 7l3-3zM6 22v-3.6l10-10 3.6 3.6-10 10H6z"/>
        </svg>

        <span class="toolbar_cell_content">
            Edit
        </span>
    </a>
@endif
