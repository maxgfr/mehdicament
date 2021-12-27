export const Config = {
  downloadUrl: [
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_bdpm.txt',
      name: 'CIS_bdpm',
      header: [
        'cis',
        'denomination_medicament',
        'forme_pharmaceutique',
        'voies_administration',
        'status_administratif',
        'type_procedure_amm',
        'etat_commercialisation',
        'data_amm',
        'statut_bdm',
        'num_autorisation_europeenne',
        'titulaires',
        'surveillance_renforcee',
      ],
      estimatedOctet: 2992 * 1024,
      isForDownload: true,
      searchIndexes: {
        keys: ['denomination_medicament', 'cis'],
      },
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_CIP_bdpm.txt',
      name: 'CIS_CIP_bdpm',
      header: [
        'cis',
        'cip7',
        'libelle_pres',
        'status_administratif',
        'etat_commercialisation',
        'date_decla_commercialisation',
        'cip13',
        'agrement_collectivite',
        'taux_remboursement',
        'prix_medicament',
        'indication_droit_remboursement',
      ],
      estimatedOctet: 3978 * 1024,
      isForDownload: true,
      options: {
        keys: ['cip7', 'cip13'],
      },
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_COMPO_bdpm.txt',
      name: 'CIS_COMPO_bdpm',
      header: [
        'cis',
        'designation',
        'code',
        'denomination_substance',
        'dosage_substance',
        'ref_dosage',
        'nature_composant',
        'num_liaison',
      ],
      estimatedOctet: 2661 * 1024,
      isForDownload: true,
      options: {
        keys: ['denomination_substance'],
      },
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_HAS_SMR_bdpm.txt',
      name: 'CIS_HAS_SMR_bdpm',
      header: [
        'cis',
        'has',
        'motif_eval',
        'date_com_transparence',
        'valeur_smr',
        'libelle_smr',
      ],
      estimatedOctet: 3486 * 1024,
      isForDownload: true,
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_HAS_ASMR_bdpm.txt',
      name: 'CIS_HAS_ASMR_bdpm',
      header: [
        'cis',
        'has',
        'motif_eval',
        'date_com_transparence',
        'valeur_asmr',
        'libelle_asmr',
      ],
      estimatedOctet: 3015 * 1024,
      isForDownload: true,
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=HAS_LiensPageCT_bdpm.txt',
      name: 'HAS_LiensPageCT_bdpm',
      header: ['has', 'lien_page_ct'],
      estimatedOctet: 431 * 1024,
      isForDownload: true,
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_GENER_bdpm.txt',
      name: 'CIS_GENER_bdpm',
      header: [
        'id_generique',
        'libelle_generique',
        'cis',
        'type_generique',
        'num_tri',
      ],
      estimatedOctet: 1118 * 1024,
      isForDownload: true,
    },
    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_CPD_bdpm.txt',
      name: 'CIS_CPD_bdpm',
      header: ['cis', 'condition'],
      estimatedOctet: 1015 * 1024,
      isForDownload: true,
    },

    {
      url: 'https://base-donnees-publique.medicaments.gouv.fr/telechargement.php?fichier=CIS_InfoImportantes.txt',
      name: 'CIS_InfoImportantes',
      header: ['cis', 'date_debut', 'date_fin', 'avis'],
      estimatedOctet: 7100 * 1024,
      isForDownload: true,
    },
  ],
};
