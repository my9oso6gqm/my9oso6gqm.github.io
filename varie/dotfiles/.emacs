;; Imposta la load-path
(add-to-list 'load-path "~/.emacs.d/lisp/")

;; Disabilita la creazione del file auto-save
(setq auto-save-default nil)

;; Disabilita la creazione del file backup
(setq make-backup-files nil)

;; Schermata d'avvio nascosta 
(custom-set-variables '(inhibit-startup-screen t))

;; Numero riga
(global-linum-mode t)

;; Tasti copia taglia incolla classici
(cua-mode t)

;; Barra degli strumenti nascosta
(tool-bar-mode -1)

;; Finesta massimizzata all'avvio
;; (add-to-list 'default-frame-alist '(fullscreen . maximized))

;; Correttore ortogafico in modalità TeX (dipende da aspell-it)
(add-hook 'LaTeX-mode-hook 'flyspell-mode)

;; Menu Math in modalità Tex (dipende da auctex)
(add-hook 'LaTeX-mode-hook 'LaTeX-math-mode)

;; Righe di testo non superano gli 80 caratteri in modalità testo e/o TeX
;; (setq-default fill-column 80)
;; (add-hook 'text-mode-hook 'turn-on-auto-fill)
;; (add-hook 'LaTeX-mode-hook 'turn-off-auto-fill)

;; Scratch buffer in modalità testo
(setq initial-major-mode 'text-mode)

;; Scratch buffer vuoto
(setq initial-scratch-message nil)

;; Numero colonna
(setq column-number-mode t)

;; Doc-view in modalità continuous 
(setq doc-view-continuous t)

;; Usa python3 al posto del deprecato python
(setq python-shell-interpreter "python3")

;; Dimensioni finestra all'avvio
(add-to-list 'default-frame-alist '(height . 48))
(add-to-list 'default-frame-alist '(width . 80))

;; Carica latex-preview-pane
(load "latex-preview-pane-master/latex-preview-pane")

;; Menu taglia copia incolla
(global-set-key [mouse-3] 'my-context-menu)

(with-eval-after-load "menu-bar"
  (require 'url-util)

  (defvar edit-popup-menu
    '(keymap
      (undo menu-item "Undo" undo
            :enable (and
                     (not buffer-read-only)
                     (not
                      (eq t buffer-undo-list))
                     (if
                         (eq last-command 'undo)
                         (listp pending-undo-list)
                       (consp buffer-undo-list)))
            :keys "")
        
            
                (separator-undo menu-item "--")
      (cut menu-item "Cut" clipboard-kill-region
           :enable (use-region-p)
           :keys "")
      (copy-link menu-item "Copy Link" 
                 (lambda () (interactive) (kill-new (url-get-url-at-point)))
            :enable (and (url-get-url-at-point))
            :keys "")
      (copy menu-item "Copy" clipboard-kill-ring-save
            :enable (use-region-p)
            :keys "")
      (paste menu-item "Paste" clipboard-yank
             :keys "")
      (paste-from-menu menu-item "Paste from Kill Menu" yank-menu
                       :enable (and
                                (cdr yank-menu)
                                (not buffer-read-only))
                       :help "Select a string from the kill ring and paste it")
      (clear menu-item "Delete" delete-region
             :enable (and mark-active (not buffer-read-only))
             :help "Clear region"
             :keys "Del")
      (separator-select-all menu-item "--")
      (mark-whole-buffer menu-item "Select All" mark-whole-buffer
                         :enable (not (= (buffer-size) 0)))))

  (defun my-context-menu (event)
    "Pop up a context menu."
    (interactive "e")
    (popup-menu edit-popup-menu)))

(provide 'context-menu)
