package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	http.Handle("/", http.FileServer(http.Dir("site/dist")))
	port := os.Getenv("PORT")
	if port == "" {
		port = "5000"
	}
	log.Printf("Starting server on port %s ...\n", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
