package com.uasz.gestion_recrutement;

import java.time.LocalDate;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.uasz.gestion_recrutement.model.Candidat;
import com.uasz.gestion_recrutement.model.Entreprise;
import com.uasz.gestion_recrutement.model.OffreEmploi;
import com.uasz.gestion_recrutement.model.Recruteur;
import com.uasz.gestion_recrutement.model.enums.StatutOffre;
import com.uasz.gestion_recrutement.model.enums.TypeUtilisateur;
import com.uasz.gestion_recrutement.repository.CandidatRepository;
import com.uasz.gestion_recrutement.repository.EntrepriseRepository;
import com.uasz.gestion_recrutement.repository.OffreEmploiRepository;
import com.uasz.gestion_recrutement.repository.RecruteurRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class InitGestionRecrutement implements CommandLineRunner {

    private final CandidatRepository candidatRepository;
    private final RecruteurRepository recruteurRepository;
    private final EntrepriseRepository entrepriseRepository;
    private final OffreEmploiRepository offreEmploiRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        
        // Vérifier si les données existent déjà
        if (entrepriseRepository.count() > 0) {
            log.info("\n\nLes données existent déjà, initialisation annulée");
            return;
        }

        log.info("\n\nDébut de l'initialisation des données...");

        // ==================== ENTREPRISES ====================
        Entreprise sonatel = Entreprise.builder()
                .nom("SONATEL")
                .secteur("Télécommunications")
                .adresse("46 Boulevard de la République, Dakar")
                .description("Leader des télécommunications au Sénégal, opérateur Orange")
                .logo("/logos/sonatel.png")
                .actif(true)
                .build();

        Entreprise cbao = Entreprise.builder()
                .nom("CBAO Groupe Attijariwafa Bank")
                .secteur("Banque et Finance")
                .adresse("1 Place de l'Indépendance, Dakar")
                .description("Institution bancaire de référence au Sénégal")
                .logo("/logos/cbao.png")
                .actif(true)
                .build();

        Entreprise sde = Entreprise.builder()
                .nom("Sénégalaise Des Eaux (SDE)")
                .secteur("Distribution d'eau")
                .adresse("Route de Ouakam, Dakar")
                .description("Distribution et assainissement de l'eau au Sénégal")
                .logo("/logos/sde.png")
                .actif(true)
                .build();

        Entreprise isi = Entreprise.builder()
                .nom("Intelligence Service Innovation (ISI)")
                .secteur("Technologies et Services IT")
                .adresse("Mermoz, Dakar")
                .description("Société de services informatiques et conseils en transformation digitale")
                .logo("/logos/isi.png")
                .actif(true)
                .build();

        Entreprise uasz = Entreprise.builder()
                .nom("Université Assane Seck de Ziguinchor")
                .secteur("Enseignement Supérieur")
                .adresse("Diabir, Ziguinchor")
                .description("Université publique du Sénégal")
                .logo("/logos/uasz.png")
                .actif(true)
                .build();

        List<Entreprise> entreprises = entrepriseRepository.saveAll(
                List.of(sonatel, cbao, sde, isi, uasz));
        log.info("\n\n✓ {} entreprises créées", entreprises.size());

        // ==================== RECRUTEURS ====================
        Recruteur recruteur1 = Recruteur.builder()
                .email("fatou.diop@sonatel.sn")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Diop")
                .prenom("Fatou")
                .telephone("771234567")
                .role(TypeUtilisateur.RECRUTEUR)
                .entreprise(sonatel)
                .poste("Responsable Recrutement")
                .actif(true)
                .build();

        Recruteur recruteur2 = Recruteur.builder()
                .email("mamadou.fall@cbao.sn")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Fall")
                .prenom("Mamadou")
                .telephone("775678901")
                .role(TypeUtilisateur.RECRUTEUR)
                .entreprise(cbao)
                .poste("Chargé RH")
                .actif(true)
                .build();

        Recruteur recruteur3 = Recruteur.builder()
                .email("aissatou.sow@isi.sn")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Sow")
                .prenom("Aïssatou")
                .telephone("779876543")
                .role(TypeUtilisateur.RECRUTEUR)
                .entreprise(isi)
                .poste("Directrice des Ressources Humaines")
                .actif(true)
                .build();

        Recruteur recruteur4 = Recruteur.builder()
                .email("ibrahima.sarr@sde.sn")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Sarr")
                .prenom("Ibrahima")
                .telephone("773456789")
                .role(TypeUtilisateur.RECRUTEUR)
                .entreprise(sde)
                .poste("Manager RH")
                .actif(true)
                .build();

        Recruteur recruteur5 = Recruteur.builder()
                .email("mariama.ndiaye@uasz.sn")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Ndiaye")
                .prenom("Mariama")
                .telephone("776543210")
                .role(TypeUtilisateur.RECRUTEUR)
                .entreprise(uasz)
                .poste("Responsable Service du Personnel")
                .actif(true)
                .build();

        List<Recruteur> recruteurs = recruteurRepository.saveAll(
                List.of(recruteur1, recruteur2, recruteur3, recruteur4, recruteur5));
        log.info("\n\n✓ {} recruteurs créés", recruteurs.size());

        // ==================== CANDIDATS ====================
        Candidat candidat1 = Candidat.builder()
                .email("abdoulaye.diallo@gmail.com")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Diallo")
                .prenom("Abdoulaye")
                .telephone("771112233")
                .role(TypeUtilisateur.CANDIDAT)
                .adresse("Liberté 6, Dakar")
                .dateNaissance(LocalDate.of(1998, 5, 15))
                .competences("Java, Spring Boot, React, MySQL, Docker, Git")
                .experience("2 ans en développement full-stack")
                .formation("Master en Génie Logiciel - UASZ")
                .cvUrl("/cv/abdoulaye_diallo_cv.pdf")
                .actif(true)
                .build();

        Candidat candidat2 = Candidat.builder()
                .email("khadija.mbaye@gmail.com")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Mbaye")
                .prenom("Khadija")
                .telephone("775554444")
                .role(TypeUtilisateur.CANDIDAT)
                .adresse("Sacré-Cœur, Dakar")
                .dateNaissance(LocalDate.of(1999, 8, 22))
                .competences("Python, Django, PostgreSQL, Machine Learning, Data Science")
                .experience("1 an en analyse de données")
                .formation("Master en Big Data - UASZ")
                .cvUrl("/cv/khadija_mbaye_cv.pdf")
                .actif(true)
                .build();

        Candidat candidat3 = Candidat.builder()
                .email("cheikh.ba@gmail.com")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Ba")
                .prenom("Cheikh")
                .telephone("779998877")
                .role(TypeUtilisateur.CANDIDAT)
                .adresse("Plateau, Dakar")
                .dateNaissance(LocalDate.of(1997, 3, 10))
                .competences("Réseau, Sécurité informatique, Cisco, Linux, Firewall")
                .experience("3 ans en administration réseau")
                .formation("Licence en Réseaux et Télécommunications")
                .cvUrl("/cv/cheikh_ba_cv.pdf")
                .actif(true)
                .build();

        Candidat candidat4 = Candidat.builder()
                .email("rama.ndao@gmail.com")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Ndao")
                .prenom("Rama")
                .telephone("773335566")
                .role(TypeUtilisateur.CANDIDAT)
                .adresse("Mermoz, Dakar")
                .dateNaissance(LocalDate.of(2000, 11, 5))
                .competences("JavaScript, Node.js, Angular, MongoDB, AWS")
                .experience("6 mois de stage en développement web")
                .formation("Licence en Informatique - UASZ")
                .cvUrl("/cv/rama_ndao_cv.pdf")
                .actif(true)
                .build();

        Candidat candidat5 = Candidat.builder()
                .email("ousmane.cisse@gmail.com")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Cissé")
                .prenom("Ousmane")
                .telephone("777778888")
                .role(TypeUtilisateur.CANDIDAT)
                .adresse("Parcelles Assainies, Dakar")
                .dateNaissance(LocalDate.of(1996, 1, 18))
                .competences("Gestion de projet, Scrum, Agile, JIRA, UML")
                .experience("4 ans en gestion de projets IT")
                .formation("Master en Management des SI")
                .cvUrl("/cv/ousmane_cisse_cv.pdf")
                .actif(true)
                .build();

        Candidat candidat6 = Candidat.builder()
                .email("bineta.seck@gmail.com")
                .motDePasse(passwordEncoder.encode("password123"))
                .nom("Seck")
                .prenom("Bineta")
                .telephone("771239999")
                .role(TypeUtilisateur.CANDIDAT)
                .adresse("Point E, Dakar")
                .dateNaissance(LocalDate.of(1998, 7, 30))
                .competences("UI/UX Design, Figma, Adobe XD, HTML/CSS, Design Thinking")
                .experience("1 an en design d'interfaces")
                .formation("Licence en Design Graphique")
                .cvUrl("/cv/bineta_seck_cv.pdf")
                .actif(true)
                .build();

        List<Candidat> candidats = candidatRepository.saveAll(
                List.of(candidat1, candidat2, candidat3, candidat4, candidat5, candidat6));
        log.info("\n\n✓ {} candidats créés", candidats.size());

        // ==================== OFFRES D'EMPLOI ====================
        OffreEmploi offre1 = OffreEmploi.builder()
                .titre("Développeur Full Stack Java/React")
                .description("Nous recherchons un développeur Full Stack pour rejoindre notre équipe de développement. "
                        + "Vous travaillerez sur des projets innovants dans le domaine des télécommunications.")
                .competencesRequises("Java, Spring Boot, React, PostgreSQL, Docker, Git")
                .typeContrat("CDI")
                .salaire(800000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(10))
                .dateExpiration(LocalDate.now().plusDays(20))
                .statut(StatutOffre.ACTIVE)
                .entreprise(sonatel)
                .actif(true)
                .build();

        OffreEmploi offre2 = OffreEmploi.builder()
                .titre("Data Scientist")
                .description("Rejoignez notre équipe d'analystes pour développer des solutions d'intelligence artificielle "
                        + "et d'analyse de données dans le secteur bancaire.")
                .competencesRequises("Python, Machine Learning, TensorFlow, SQL, Power BI")
                .typeContrat("CDD 2 ans")
                .salaire(750000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(5))
                .dateExpiration(LocalDate.now().plusDays(25))
                .statut(StatutOffre.ACTIVE)
                .entreprise(cbao)
                .actif(true)
                .build();

        OffreEmploi offre3 = OffreEmploi.builder()
                .titre("Administrateur Réseau et Systèmes")
                .description("Nous cherchons un administrateur réseau pour gérer notre infrastructure IT. "
                        + "Mission : maintenance, sécurisation et optimisation du réseau.")
                .competencesRequises("Cisco, Linux, Windows Server, Firewall, VPN, Active Directory")
                .typeContrat("CDI")
                .salaire(650000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(15))
                .dateExpiration(LocalDate.now().plusDays(15))
                .statut(StatutOffre.ACTIVE)
                .entreprise(sde)
                .actif(true)
                .build();

        OffreEmploi offre4 = OffreEmploi.builder()
                .titre("Chef de Projet IT")
                .description("Pilotage de projets de transformation digitale pour nos clients. "
                        + "Expérience en méthodologie Agile requise.")
                .competencesRequises("Gestion de projet, Scrum, JIRA, Communication, Leadership")
                .typeContrat("CDI")
                .salaire(900000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(7))
                .dateExpiration(LocalDate.now().plusDays(23))
                .statut(StatutOffre.ACTIVE)
                .entreprise(isi)
                .actif(true)
                .build();

        OffreEmploi offre5 = OffreEmploi.builder()
                .titre("Développeur Mobile Flutter")
                .description("Développement d'applications mobiles innovantes pour nos services clients. "
                        + "Connaissance de Flutter et des API REST indispensable.")
                .competencesRequises("Flutter, Dart, Firebase, REST API, Git")
                .typeContrat("CDD 1 an")
                .salaire(600000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(3))
                .dateExpiration(LocalDate.now().plusDays(27))
                .statut(StatutOffre.ACTIVE)
                .entreprise(sonatel)
                .actif(true)
                .build();

        OffreEmploi offre6 = OffreEmploi.builder()
                .titre("Enseignant-Chercheur en Informatique")
                .description("Recrutement d'un enseignant-chercheur pour le département d'informatique. "
                        + "Domaines : Big Data, IA, Génie Logiciel. Doctorat requis.")
                .competencesRequises("Doctorat en Informatique, Recherche, Pédagogie, Publications scientifiques")
                .typeContrat("Fonctionnaire")
                .salaire(550000.0)
                .localisation("Ziguinchor, Sénégal")
                .datePublication(LocalDate.now().minusDays(20))
                .dateExpiration(LocalDate.now().plusDays(40))
                .statut(StatutOffre.ACTIVE)
                .entreprise(uasz)
                .actif(true)
                .build();

        OffreEmploi offre7 = OffreEmploi.builder()
                .titre("UX/UI Designer")
                .description("Conception d'interfaces utilisateur modernes et intuitives pour nos applications web et mobile.")
                .competencesRequises("Figma, Adobe XD, Photoshop, UI/UX, Design Thinking, HTML/CSS")
                .typeContrat("CDD 6 mois")
                .salaire(500000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(2))
                .dateExpiration(LocalDate.now().plusDays(28))
                .statut(StatutOffre.ACTIVE)
                .entreprise(isi)
                .actif(true)
                .build();

        OffreEmploi offre8 = OffreEmploi.builder()
                .titre("Ingénieur DevOps")
                .description("Automatisation et optimisation de nos processus de déploiement. "
                        + "Expérience avec Kubernetes et CI/CD souhaitée.")
                .competencesRequises("Docker, Kubernetes, Jenkins, GitLab CI/CD, AWS, Terraform")
                .typeContrat("CDI")
                .salaire(850000.0)
                .localisation("Dakar, Sénégal")
                .datePublication(LocalDate.now().minusDays(12))
                .dateExpiration(LocalDate.now().plusDays(18))
                .statut(StatutOffre.ACTIVE)
                .entreprise(sonatel)
                .actif(true)
                .build();

        List<OffreEmploi> offres = offreEmploiRepository.saveAll(
                List.of(offre1, offre2, offre3, offre4, offre5, offre6, offre7, offre8));
        log.info("\n\n✓ {} offres d'emploi créées", offres.size());

        log.info("\n\n==============================================");
        log.info("\n\n✓ Initialisation terminée avec succès !");
        log.info("\n\n==============================================");
        log.info("\n\nEntreprises: {}", entreprises.size());
        log.info("\n\nRecruteurs: {}", recruteurs.size());
        log.info("\n\nCandidats: {}", candidats.size());
        log.info("\n\nOffres d'emploi: {}", offres.size());
        log.info("\n\n==============================================");
        log.info("\n\nCOMPTES TEST:");
        log.info("\n\n--- RECRUTEURS ---");
        log.info("\n\nEmail: fatou.diop@sonatel.sn | MDP: password123");
        log.info("\n\nEmail: mamadou.fall@cbao.sn | MDP: password123");
        log.info("\n\nEmail: aissatou.sow@isi.sn | MDP: password123");
        log.info("\n\n--- CANDIDATS ---");
        log.info("\n\nEmail: abdoulaye.diallo@gmail.com | MDP: password123");
        log.info("\n\nEmail: khadija.mbaye@gmail.com | MDP: password123");
        log.info("\n\nEmail: cheikh.ba@gmail.com | MDP: password123");
        log.info("\n\n==============================================");
    }
}