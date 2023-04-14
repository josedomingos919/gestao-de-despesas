-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Conta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saldo" DECIMAL NOT NULL DEFAULT 0,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Conta_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Despesa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL,
    "descricao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "total" DECIMAL NOT NULL,
    CONSTRAINT "Despesa_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DespesasPagas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "despesaId" INTEGER NOT NULL,
    "formaPagamento" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
