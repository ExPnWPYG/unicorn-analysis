(;; Dir settings
 ("" . ((org-mode . ((eval . (progn
				      ;; Read content of revealjs-plugins-conf and set assign it to org-re-reveal-init-script
				      (setq org-re-reveal-init-script
					    (with-temp-buffer
					      (insert-file-contents "./revealjs-plugins-conf.js")
					      (buffer-string))))))))))
